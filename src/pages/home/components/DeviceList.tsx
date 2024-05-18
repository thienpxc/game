// import React, { useEffect, useRef, useState } from "react";
// // import { Table, Form } from "react-bootstrap";
// // import { ScriptEnum } from "../../../enums/ScriptEnum";
// // import { Device } from "../../../objects/Device";

// export default function DeviceList({
//   refreshMode,
//   manualRefresh,
// }: {
//   refreshMode: string;
//   manualRefresh: boolean;
// }) {
//   const [deviceList, setDeviceList] = useState<Device[]>([]);

//   useEffect(() => {
//     let intervalId: NodeJS.Timeout;

//     function fetchDevices() {
//       window.el.adbApi.findDevices(
//         (data: {
//           error: string | null;
//           data:
//             | {
//                 address: string;
//                 transportId: string;
//                 model: string;
//               }[]
//             | null;
//         }) => {
//           if (data.data) {
//             let result: Device[] = [];
//             for (let i in data.data) {
//               const newDevice = new Device(
//                 data.data[i].address,
//                 data.data[i].transportId,
//                 data.data[i].model
//               );
//               if (
//                 !deviceList.find(
//                   (device) => device.transportId === newDevice.transportId
//                 )
//               ) {
//                 result.push(newDevice);
//               }
//             }
//             const updatedDeviceList = deviceList.filter((device) =>
//               data.data.find(
//                 (newDevice) => newDevice.transportId === device.transportId
//               )
//             );
//             setDeviceList([...updatedDeviceList, ...result]);
//           }
//         }
//       );
//     }

//     if (refreshMode === "auto") {
//       fetchDevices();
//       intervalId = setInterval(fetchDevices, 2000);
//     }

//     if (refreshMode === "5s") {
//       fetchDevices();
//       intervalId = setInterval(fetchDevices, 5000);
//     }

//     if (refreshMode === "20s") {
//       fetchDevices();
//       intervalId = setInterval(fetchDevices, 20000);
//     }

//     if (refreshMode === "manual") {
//       fetchDevices();
//     }

//     return () => {
//       clearInterval(intervalId); // Xóa interval khi component unmounted
//     };
//   }, [manualRefresh, refreshMode]);

//   return (
//     <div className="device_list">
//       <span className="table_name">Device List</span>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Address</th>
//             <th>Tranport Id</th>
//             <th>Script</th>
//             <th>Tools</th>
//             <th>Logs</th>
//           </tr>
//         </thead>
//         <tbody>
//           {deviceList.map((device, index) => (
//             <tr key={device.transportId}>
//               <td>{index + 1}</td>
//               <td>{device.address}</td>
//               <td>{device.transportId}</td>
//               <td>
//                 <Form.Select
//                   value={device.script}
//                   onChange={(e) => {
//                     const newDeviceList = [...deviceList];
//                     const device = newDeviceList[index];
//                     device.script = e.target.value;
//                     setDeviceList(newDeviceList);
//                   }}
//                   aria-label="Default select example"
//                 >
//                   {Object.keys(ScriptEnum).map((key) => (
//                     <option key={key} value={key}>
//                       {(ScriptEnum as any)[key]}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </td>
//               <td>
//                 <button
//                   onClick={(e: any) => {
//                     const newDeviceList = [...deviceList];
//                     const device = newDeviceList[index];
//                     if (e.target.classList.contains("btn-primary")) {
//                       device.run();
//                       if (device.script != ScriptEnum.NO_ACTION) {
//                         e.target.classList.add("btn-danger");
//                         e.target.classList.remove("btn-primary");
//                         e.target.innerText = "STOP";
//                       }
//                     } else {
//                       device.stop();
//                       if (device.script == ScriptEnum.NO_ACTION) {
//                         e.target.classList.remove("btn-danger");
//                         e.target.classList.add("btn-primary");
//                         e.target.innerText = "START";
//                       }
//                     }
//                     setDeviceList(newDeviceList);
//                   }}
//                   className="btn-tool btn btn-primary"
//                 >
//                   START
//                 </button>
//                 <button
//                   onClick={() => {
//                     window.el.adbApi.screenCap(device.address);
//                   }}
//                   className="btn-tool btn btn-primary"
//                 >
//                   <i className="fa-solid fa-camera-retro"></i>
//                 </button>
//                 <button
//                   onClick={() => {
//                     window.el.adbApi.findAndClick(device.address);
//                   }}
//                 >
//                   debug
//                 </button>
//               </td>
//               <td>
//                 <span>{device.logs[device.logs.length - 1]}</span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
