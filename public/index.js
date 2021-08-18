/* eslint-disable no-use-before-define */
fetch('/photographer')
  .then((res) => res.json())
  .then((photographer) => {
    const customersTable = document.querySelector('.customers-table');
    photographer.forEach((item) => {
      const tableRow = createElement('li', 'table-row', customersTable);
      const col1 = createElement('div', 'col col-1', tableRow);
      col1.textContent = item.cus_name;
      const col2 = createElement('div', 'col col-2', tableRow);
      col2.textContent = item.email;
      const col3 = createElement('div', 'col col-3', tableRow);
      col3.textContent = item.phone;
      const col4 = createElement('div', 'col col-4', tableRow);
      col4.textContent = item.city;
      const col5 = createElement('div', 'col col-5', tableRow);
      col5.textContent = item.country;
      const col6 = createElement('div', 'col col-6', tableRow);
      col6.textContent = item.purpose;
    });
  });

const createElement = (tag, classname, parent) => {
  const item = document.createElement(tag);
  item.className = classname;
  parent.appendChild(item);
  return item;
};
