// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


// mod system_tray;

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
    // .system_tray(system_tray)
        .run(context)
        .expect("error while running tauri application");
}
