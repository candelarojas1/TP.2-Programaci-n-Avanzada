//Ejercicio 1: Crear un objeto literal para un dispositivo de red
const router = {
  modelo: "AX1800",
  marca: "TP-Link",
  puertos: 4,
  velocidad: 1800, 
  soportaWifi: true
};

console.log("Router:", router);

//Ejercicio 2: Array de dispositivos de red
const dispositivosRed = [
  { tipo: "Router", marca: "Cisco", modelo: "RV340", precio: 250 },
  { tipo: "Switch", marca: "Netgear", modelo: "GS308", precio: 80 },
  { tipo: "Firewall", marca: "Fortinet", modelo: "FortiGate 40F", precio: 450 },
  { tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi 6 Lite", precio: 120 },
  { tipo: "Router", marca: "TP-Link", modelo: "Archer C6", precio: 60 }
];

console.log("Dispositivos de red:", dispositivosRed);

//Ejercicio 3: Filtrar dispositivos por marca
const dispositivosRed1 = [
  { tipo: "Router", marca: "Cisco", modelo: "1941", precio: 1200 },
  { tipo: "Switch", marca: "TP-Link", modelo: "TL-SG108", precio: 150 },
  { tipo: "Firewall", marca: "Cisco", modelo: "ASA 5506-X", precio: 2500 },
  { tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi AP AC Pro", precio: 320 },
  { tipo: "Router", marca: "TP-Link", modelo: "Archer C7", precio: 180 }
];

const dispositivosCisco = dispositivosRed1.filter(d => d.marca === "Cisco");
console.log("Dispositivos Cisco:", dispositivosCisco);

//Ejercicio 4: Mapear direcciones IP
const servidores = [
  { nombre: "Servidor Web", ip: "192.168.1.10", sistema: "Linux" },
  { nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows" },
  { nombre: "Servidor de Correo", ip: "192.168.1.12", sistema: "Linux" },
  { nombre: "Servidor DNS", ip: "192.168.1.13", sistema: "Linux" },
  { nombre: "Servidor de Archivos", ip: "192.168.1.14", sistema: "Windows" }
];

const direccionesIP = servidores.map(s => s.ip);
console.log("Direcciones IP:", direccionesIP);

//Ejercicio 5: Filtrar y ordenar paquetes de datos
const paquetesDatos = [
  { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3 },
  { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800, prioridad: 1 },
  { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5 },
  { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950, prioridad: 2 },
  { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4 }
];

const paquetesFiltradosYOrdenados = paquetesDatos
  .filter(p => p.tamaño > 1000)
  .sort((a, b) => b.prioridad - a.prioridad);
console.log("Paquetes filtrados y ordenados:", paquetesFiltradosYOrdenados);

//Ejercicio 6: Calcular estadísticas de red
const traficoRed = {
  "08:00": 1250,
  "09:00": 1870,
  "10:00": 2100,
  "11:00": 1950,
  "12:00": 1600,
  "13:00": 1300,
  "14:00": 1700,
  "15:00": 2200,
  "16:00": 1800,
  "17:00": 1500
};

// 1) Calcular el total de datos transferidos
const totalDatos = Object.values(traficoRed).reduce((acc, val) => acc + val, 0);

// 2) Encontrar la hora con mayor tráfico
const [horaMax, maximo] = Object.entries(traficoRed)
  .reduce((max, actual) => actual[1] > max[1] ? actual : max);

console.log("Total de datos transferidos:", totalDatos, "MB");
console.log("Hora con mayor tráfico:", horaMax, "con", maximo, "MB");

//Ejercicio 7: Analizar conexiones de red
const conexiones = [
  { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" },
  { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" },
  { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" },
  { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" },
  { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" },
  { id: 6, origen: "192.168.1.6", destino: "192.168.1.10", protocolo: "FTP" },
  { id: 7, origen: "192.168.1.9", destino: "192.168.1.15", protocolo: "SSH" },
  { id: 8, origen: "192.168.1.4", destino: "192.168.1.11", protocolo: "HTTP" }
];

const conexionesPorProtocolo = conexiones.reduce((acc, conexion) => {
  const protocolo = conexion.protocolo;
  acc[protocolo] = (acc[protocolo] || 0) + 1;
  return acc;
}, {});

console.log("Conexiones por protocolo:", conexionesPorProtocolo);

//Ejercicio 8: Filtrar y transformar alertas de seguridad
const dispositivos = [
  { id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5", tipo: "Estación de trabajo" },
  { id: 2, nombre: "PC-Marketing", ip: "192.168.1.7", tipo: "Estación de trabajo" },
  { id: 3, nombre: "Servidor-Web", ip: "192.168.1.10", tipo: "Servidor" },
  { id: 4, nombre: "Servidor-BD", ip: "192.168.1.11", tipo: "Servidor" }
];

const conexionesActivas = [
  { origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP", bytes: 8500 },
  { origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000 },
  { origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200 }
];

const informeActividad = conexionesActivas.map(conexion => {
  const dispositivoOrigen = dispositivos.find(d => d.ip === conexion.origen);
  const dispositivoDestino = dispositivos.find(d => d.ip === conexion.destino);

  return {
    origen: dispositivoOrigen ? dispositivoOrigen.nombre : conexion.origen,
    tipoOrigen: dispositivoOrigen ? dispositivoOrigen.tipo : "Desconocido",
    destino: dispositivoDestino ? dispositivoDestino.nombre : conexion.destino,
    tipoDestino: dispositivoDestino ? dispositivoDestino.tipo : "Desconocido",
    protocolo: conexion.protocolo,
    bytes: conexion.bytes
  };
});

console.log("Informe de actividad de red:", informeActividad);

//Ejercicio 9: Combinar datos de dispositivos y conexiones
const topologiaRed = {
  nodos: [
    { id: "A", tipo: "Router", ubicacion: "Planta 1" },
    { id: "B", tipo: "Switch", ubicacion: "Planta 1" },
    { id: "C", tipo: "Switch", ubicacion: "Planta 2" },
    { id: "D", tipo: "Switch", ubicacion: "Planta 3" },
    { id: "E", tipo: "Router", ubicacion: "Planta 3" }
  ],
  conexiones: [
    { origen: "A", destino: "B", ancho_banda: 1000 },
    { origen: "A", destino: "C", ancho_banda: 1000 },
    { origen: "B", destino: "C", ancho_banda: 100 },
    { origen: "B", destino: "D", ancho_banda: 100 },
    { origen: "C", destino: "D", ancho_banda: 100 },
    { origen: "C", destino: "E", ancho_banda: 1000 },
    { origen: "D", destino: "E", ancho_banda: 1000 }
  ]
};

// 1) Contar conexiones por nodo
const conexionesPorNodo = {};
topologiaRed.nodos.forEach(nodo => {
  conexionesPorNodo[nodo.id] = 0;
});

topologiaRed.conexiones.forEach(conexion => {
  conexionesPorNodo[conexion.origen]++;
  conexionesPorNodo[conexion.destino]++;
});

// 2) Ordenar nodos de mayor a menor por número de conexiones
const nodosOrdenados = Object.entries(conexionesPorNodo)
  .sort((a, b) => b[1] - a[1]); 

// 3) Generar sugerencias de optimización
const sugerencias = nodosOrdenados
  .filter(([id, count]) => count > 2)
  .map(([id, count]) => `Nodo ${id} tiene ${count} conexiones. Considerar aumentar ancho de banda.`);

console.log("Conexiones por nodo:", conexionesPorNodo);
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados);
console.log("Sugerencias de optimización:", sugerencias);

//Ejercicio 10: Analizar y optimizar topología de red
const topologiaRed1 = {
  nodos: [
    { id: "A", tipo: "Router", ubicacion: "Planta 1" },
    { id: "B", tipo: "Switch", ubicacion: "Planta 1" },
    { id: "C", tipo: "Switch", ubicacion: "Planta 2" },
    { id: "D", tipo: "Switch", ubicacion: "Planta 3" },
    { id: "E", tipo: "Router", ubicacion: "Planta 3" }
  ],
  conexiones: [
    { origen: "A", destino: "B", ancho_banda: 1000 },
    { origen: "A", destino: "C", ancho_banda: 1000 },
    { origen: "B", destino: "C", ancho_banda: 100 },
    { origen: "B", destino: "D", ancho_banda: 100 },
    { origen: "C", destino: "D", ancho_banda: 100 },
    { origen: "C", destino: "E", ancho_banda: 1000 },
    { origen: "D", destino: "E", ancho_banda: 1000 }
  ]
};

// 1) Inicializar conteo de conexiones
const conexionesPorNodo1 = {};
topologiaRed1.nodos.forEach(nodo => {
  conexionesPorNodo1[nodo.id] = 0;
});

// 2) Contar conexiones para cada nodo
topologiaRed1.conexiones.forEach(conexion => {
  conexionesPorNodo1[conexion.origen]++;
  conexionesPorNodo1[conexion.destino]++;
});

// 3) Ordenar nodos de mayor a menor según conexiones
const nodosOrdenados1 = Object.entries(conexionesPorNodo1)
  .sort((a, b) => b[1] - a[1]); 

console.log("Conexiones por nodo:", conexionesPorNodo1);
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados1);

