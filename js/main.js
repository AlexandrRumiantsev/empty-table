const tResult = document.getElementById("result")
const tMark = document.getElementById("mark")

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, JSON.parse(xhr.response));
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON(`${window.location.origin}/data.json`,
function(err, data) {
  data.map((elem)=>{

  tMark.innerHTML += `
  <tr class="table__row table__row--blue">
      <td class="table__cell">
          ${elem.title}
      </td>
  </tr>`

	const tr = document.createElement("tr")
	tr.className = 'table__row'
    elem.data.map((cell, index)=>{
    const td = document.createElement("td")
		td.className = 'table__cell'
		const span = document.createElement("span")
		span.innerText = cell
		td.appendChild(span)
		tr.appendChild(td)
    });
    tResult.appendChild(tr)
  })
});