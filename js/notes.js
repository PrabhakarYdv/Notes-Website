const addBtn = document.getElementById("add-btn")
const main = document.querySelector(".main")
const deleteBtn = document.querySelector(".del")
const saveBtn = document.querySelector(".save")
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
                    <i class="fa-solid fa-floppy-disk save"></i>
                    <i class="fa-solid fa-trash del"></i>
                </div>
                <textarea>${textData}</textarea>
                </div>`;
    const note = document.createElement("div")
    note.innerHTML = html
    main.appendChild(note)
    saveNotes()

    note.querySelector(".save").addEventListener("click", saveNotes)

    note.querySelector(".del").addEventListener("click", () => {
        note.remove()
        saveNotes()


        

    })

    note.querySelector("textarea").addEventListener("focusout",()=>{
        saveNotes()
    })
}

addBtn.addEventListener("click", ()=>addNote(""))


const getNotes = () => {
    const notesData = JSON.parse(localStorage.getItem("Notes"))
    // console.log(notesData)
    notesData.forEach((data) => {
        addNote(data)
        console.log(data)
    });
}

getNotes()