document.addEventListener("DOMContentLoaded", function() {
    var submit_btn = document.getElementById("submit_me");
    var user_input = document.getElementById("userinput");
    var todolist = document.getElementById("data");

    submit_btn.addEventListener("click", function() {
        if (user_input.value.trim() !== "") { 
            todolist.insertAdjacentHTML("beforeend", `<div class="todos">
                <input type="checkbox" class="todo-checkbox">
                <p>${user_input.value}</p>
                <input type="button" class="delete-btn" value="Delete"></input>
            </div>`);

            user_input.value = ""; 
        }
    });

    document.addEventListener("change", function(e) {
        if (e.target && e.target.classList.contains("todo-checkbox")) {
            var todoItem = e.target.parentNode;
            if (e.target.checked) {
                todoItem.classList.add("completed");
            } else {
                todoItem.classList.remove("completed");
            }
        }
    });

    todolist.addEventListener("click", function(e) {
        if (e.target && e.target.classList.contains("delete-btn")) {
            e.target.parentNode.remove();
        }
    });
});
