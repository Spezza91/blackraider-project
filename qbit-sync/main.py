import os
import time
import requests
import sys

# Configurazione da Variabili d'Ambiente
QBIT_HOST = os.getenv('QBIT_HOST', 'http://gluetun:8080')
QBIT_USER = os.getenv('QBIT_USER', 'admin')
QBIT_PASS = os.getenv('QBIT_PASS', 'adminadmin')
VPN_PORT_FILE = '/shared/forwarded_port'
CHECK_INTERVAL = 300

def get_vpn_port():
    try:
        with open(VPN_PORT_FILE, 'r') as f:
            return int(f.read().strip())
    except FileNotFoundError:
        print(f"Attesa file porta VPN ({VPN_PORT_FILE})...")
        return None
    except ValueError:
        print("Il file della porta è vuoto o non valido.")
        return None

def sync_port():
    session = requests.Session()
    
    # 1. Login
    try:
        login_url = f"{QBIT_HOST}/api/v2/auth/login"
        res = session.post(login_url, data={'username': QBIT_USER, 'password': QBIT_PASS})
        if res.status_code != 200:
            print(f"Errore Login qBittorrent: {res.status_code}")
            return
    except Exception as e:
        print(f"Impossibile connettersi a qBittorrent: {e}")
        return

    # 2. Ottieni Porta Attuale (State Reconciliation)
    try:
        pref_url = f"{QBIT_HOST}/api/v2/app/preferences"
        current_config = session.get(pref_url).json()
        current_port = current_config.get('listen_port')
    except Exception as e:
        print(f"Errore lettura preferenze: {e}")
        return

    # 3. Leggi Porta VPN
    vpn_port = get_vpn_port()
    if not vpn_port:
        return

    # 4. Confronta e Aggiorna
    if current_port != vpn_port:
        print(f"DISALLINEAMENTO! qBit: {current_port} | VPN: {vpn_port}")
        print(f"Aggiornamento in corso...")
        
        update_data = {'json': f'{{"listen_port": {vpn_port}}}'}
        res = session.post(f"{QBIT_HOST}/api/v2/app/setPreferences", data=update_data)
        
        if res.status_code == 200:
            print(f"SUCCESS: Porta aggiornata a {vpn_port}")
        else:
            print(f"FAIL: Errore aggiornamento porta: {res.text}")
    else:
        # Decommenta per log prolissi
        # print(f"Tutto allineato ({vpn_port}). Dormo.")
        pass

if __name__ == "__main__":
    print("Start qBit-Sync Service...")
    
    time.sleep(10)
    while True:
        sync_port()
        time.sleep(CHECK_INTERVAL)