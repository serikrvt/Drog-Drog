const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('drageover', drageover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drag', dragdrop)


}



function dragstart(e) {
    e.target.classList.add('hold')
    setTimeout(() => e.target.classList.add('hide'), 0)


}


function dragend(e) {
    // e.target.classList.remove('hold', 'hide')
    e.target.className = 'item'


}

function drageover(event) {
    event.preventDefault()
    
}

function dragenter(e) {
    e.target.classList.add('hovered')

}

function dragleave(e) {
    e.target.classList.remove('hovered')


}

function dragdrop(e) {
    e.target.classList.remove('hovered')
    e.target.append(item)
}

