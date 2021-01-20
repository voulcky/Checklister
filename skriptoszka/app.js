
// Wczytywanko
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Będziem robić tablicę! ===D
//let LIST = [];
//let id = 0;
//LIST = [{},{},...];
//LIST[0] ->
//{
//    name : "Dring COffe",
//    id : 0,
//    done : false,
//    trash : false
//}

// Funkcja do dodawania przedmiotu do listy
function DodajNaListe(toDo,id,done,trash){
    if (trash){
        return;
    }
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";


    // Itemek na liście
    const text =
        <li class="item">
            <i class="fa ${DONE} complete" job="complete" id="${id}"></i>
            <p class="text ${LINE}">${toDo}</p>
            <i class="de fa fa-trash-o" job="delete"></i>
        </li>
    // Pozycja
    const position = "beforeend";
    // To wsadza text w pozycje.
    list.insertAdjacentHTML(position, text);
}


// Wczytywanie przedmiotu od usera, keyCode 13 to enter.
// Jak user ciapnie enter to jego input wpada na listę.
document.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addTodo(toDo,id,false,false);
            LIST.push(
                {
                    name: toDo,
                    id: id,
                    done: false,
                    trash: false
                }
            );
            input.value = "";
            id++;
            //addToDo(toDo);
        }
    
    }
});

