// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "ATTICO_A - test010000", a: "01_Ingresso", p: new BABYLON.Vector3(-27.9483, 148.68, -79.0188), l: new BABYLON.Vector3(-28.9483, 148.68, -79.0188)});
   layamaCameras.push({n: "ATTICO_A - test010001", a: "02_Sala", p: new BABYLON.Vector3(15.1528, 148.68, -241.806), l: new BABYLON.Vector3(14.1528, 148.68, -241.806)});
   layamaCameras.push({n: "ATTICO_A - test010002", a: "03_sala", p: new BABYLON.Vector3(204.95, 148.68, -313.775), l: new BABYLON.Vector3(203.95, 148.68, -313.775)});
   layamaCameras.push({n: "ATTICO_A - test010003", a: "05_sala", p: new BABYLON.Vector3(15.8743, 148.68, -603.027), l: new BABYLON.Vector3(14.8743, 148.68, -603.027)});
   layamaCameras.push({n: "ATTICO_A - test010004", a: "06_sala", p: new BABYLON.Vector3(-63.3516, 148.68, -695.161), l: new BABYLON.Vector3(-64.3516, 148.68, -695.161)});
   layamaCameras.push({n: "ATTICO_A - test010005", a: "07_sala", p: new BABYLON.Vector3(302.251, 148.68, -659.247), l: new BABYLON.Vector3(301.251, 148.68, -659.247)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("1024");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

