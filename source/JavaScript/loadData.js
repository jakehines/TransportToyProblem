const items1 =
    [
        { ID: "01", title: "Lord of the Rings", author: "Tolkien, J", ISBN: "01", publisher: "Publishing Co.", lco: "11/22/2021" }
    ];
function loadTableData(items) {
    const table = document.getElementById("tableBody");
    items.forEach(item => {
        let row = table.insertRow();
        let ID = row.insertCell(0);
        ID.innerHTML = item.ID;
        row.id = ID;
        let title = row.insertCell(1);
        title.innerHTML = item.title;
        let author = row.insertCell(2);
        author.innerHTML = item.author;
        let ISBN = row.insertCell(3);
        ISBN.innerHTML = item.ISBN;
        let publisher = row.insertCell(4);
        publisher.innerHTML = item.publisher;
        let lco = row.insertCell(5);
        lco.innerHTML = item.lco;
        $("td").attr("data-toggle", "modal");
        $("td").attr("data-id", ID);
        $("td").attr("data-target", "#editModal");
    }
    );
}
loadTableData(items1);
loadTableData([]);