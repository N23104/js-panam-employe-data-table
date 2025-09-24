// Sample data array
const data = [
  { id: "01", name: "Mehedi Hasan", department: "IT" },
  { id: "02", name: "Azizul Islam", department: "IT" },
  { id: "03", name: "Tanvir Mahmud", department: "IT" },
  { id: "o4", name: "Namita Roy", department:"CSE"            }
  
];


const tableBody = document.querySelector("#dataTable tbody");


data.forEach((row, index) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${row.id}</td>
    <td>${row.name}</td>
    <td>${row.department}</td>
  `;
  tr.addEventListener("click", () => downloadRow(row, index));
  tableBody.appendChild(tr);
});

function downloadRow(rowData, index) {
  const content = JSON.stringify(rowData, null, 2);
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `Panam Employe-${rowData.id}.json`;  
  a.click();

  URL.revokeObjectURL(url); 
}
