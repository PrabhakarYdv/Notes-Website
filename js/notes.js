const addBtn = document.getElementById("add-btn")
const main = document.querySelector(".main")
const deleteBtn = document.getElementById(".del")
const saveBtn = document.getElementById(".save")
// Global decalre beacuse i have to perform save and delete also from these variable

const chnageBGC = () => {
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomHexCode = "#" + randomNumber.toString(16)
    document.body.style.backgroundColor = randomHexCode
}
chnageBGC()


const saveNotes = () => {
    chnageBGC()
    const textNotes = document.querySelectorAll(".notes-container textarea");
    const data = []
    textNotes.forEach((text) => {
        data.push(text.value)
    });
    console.log(textNotes, data)
    localStorage.setItem("Notes", JSON.stringify(data))
}

const addNote = (textData = "") => {
    chnageBGC()
    let html = `<div class="notes-container">
                    <div class="toolbar">
                    <i id="save" class="fa-solid fa-floppy-disk"></i>
                    <i id="del" class="fa-solid fa-trash"></i>
                </div>
                <textarea> ${textData} </textarea>
                </div>`;
    const note = document.createElement("div")
    note.innerHTML = html
    main.appendChild(note)
    saveNotes()

    note.querySelector("#save").addEventListener("click", saveNotes)

    note.querySelector("#del").addEventListener("click", () => {
        note.remove()
        saveNotes()


        

    })

    note.querySelector("textarea").addEventListener("focusout",()=>{
        saveNotes()
    })
}

addBtn.addEventListener("click", addNote)


const getNotes = () => {
    const notesData = JSON.parse(localStorage.getItem("Notes"))
    // console.log(notesData)
    notesData.forEach((data) => {
        addNote(data)
        console.log(data)
    });
}

getNotes()