document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('project').textContent = data.project;
            // document.getElementById('').textContent = data.description;
            // document.getElementById('').textContent = data.items.join(', ');
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('button').forEach(button => {
//         button.addEventListener('click', event => {
//             const buttonId = event.target.id;
//             fetch('data.json')
//             .then(response => response.json())
//             .then(data => {
//                 const gemInstance = data.gem_instances.find(instance => instance.name === buttonId);
//                 if (gemInstance) {
//                     displayData(gemInstance);
//                 } else {
//                     document.getElementById('toggledata').innerText = `No data found for ${buttonId}`;
//                 }
//             })
//             .catch(error => console.error('Error fetching the JSON:', error));
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('input').forEach(button => {
                const buttonId = button.id;
                const gemInstance = data.gem_instances.find(instance => instance.name === buttonId);

                button.addEventListener('click', event => {
                    if (gemInstance) {
                        displayData(gemInstance);
                    } else {
                        document.getElementById('toggledata').innerText = `No data found for ${buttonId}`;
                    }
                });
            });
        })
        .catch(error => console.error('Error fetching the JSON:', error));
});

function displayData(instance) {
    const outputDiv = document.getElementById('toggledata');
    outputDiv.innerHTML = `
        <h2>${instance.name}</h2>
        <div class=data-box>
            <span>Elapsed Cycle Count:</span> 
            <span>${instance.elapsed_cycle_count}</span>
        </div>
        <div class="raw-data">
            ${instance.counters.map(counter => {
                const key = Object.keys(counter)[0];
                const value = counter[key];
                return `<li>${key}: ${value}</li>`;
            }).join('')}
        </div>
    `;
}

// arrow-color
document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const gemInstances = data.gem_instances.map(instance => instance.name);
            document.querySelectorAll('div').forEach(div => {
                if (gemInstances.includes(div.className)) {
                    div.classList.add('found');
                }
            });  
        })
        .catch(error => console.error('Error fetching the JSON:', error));
}); 