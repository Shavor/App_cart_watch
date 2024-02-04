
class Cart {
    constructor (items){
        this.items = items;
    }

    goodsPlus(art){
        this.items[art]['count']++;
    }

    goodsMinus(art){
        if(this.items[art]['count'] - 1 == 0) {
            this.goodsDelete()
        } else {
            this.items[art]['count']--;
        }
    }

    goodsDelete(art){
        delete this.items[art];
    }

    render(){
        const table = document.createElement('table');
        table.classList.add('cart');

        for(let key in this.items) {
            const goods = this.items[key];

            let tr = document.createElement('tr');//строка
            let td = document.createElement('td');
            //delete Button
            let button = document.createElement('button');
            button.classList.add('delete', 'button-primary');
            button.innerHTML = 'X';
            button.setAttribute('data-articul', key);
            td.appendChild(button);
            tr.appendChild(td);
            //img
            td = document.createElement('td');
            let img = document.createElement('img');
            img.src = goods.image;
            td.appendChild(img);
            tr.appendChild(td);
            //name
            td = document.createElement('td');
            let h4 = document.createElement('h4');
            h4.innerHTML = goods.name;
            td.appendChild(h4);
            tr.appendChild(td);
            //mines
            td = document.createElement('td');
            button = document.createElement('button');
            button.classList.add('minus', 'button-primary');
            button.innerHTML = '-';
            button.setAttribute('data-articul', key);
            td.appendChild(button);
            tr.appendChild(td);
            //pluse
            td = document.createElement('td');
            button = document.createElement('button');
            button.classList.add('plus', 'button-primary');
            button.innerHTML = '+';
            button.setAttribute('data-articul', key);
            td.appendChild(button);
            tr.appendChild(td);

            table.appendChild(tr);

        }

        return table;
    }
}

