const serviceOwnersTable = document.getElementById('serviceOwnersTable');

// Add event listeners to each row's buttons
serviceOwnersTable.querySelectorAll('tr').forEach((row) => {
    const activateBtn = row.querySelector('.activateBtn');
    const deactivateBtn = row.querySelector('.deactivateBtn');
    const deleteBtn = row.querySelector('.deleteBtn');

    // Activate button event listener
    activateBtn.addEventListener('click', () => {
        // Activate the service owner account
        row.classList.remove('deactivated');
    });

    // Deactivate button event listener
    deactivateBtn.addEventListener('click', () => {
        // Deactivate the service owner account
        row.classList.add('deactivated');
    });

    // Delete button event listener
    deleteBtn.addEventListener('click', () => {
        // Remove the service owner row from the table
        row.remove();
    });
});

// ======================================================================
const customerTable = document.getElementById('customerTable');

customerTable.querySelectorAll('tr').forEach((row) => {
    const deleteBtn = row.querySelector('.deleteBtn');

    deleteBtn.addEventListener('click', () => {
        row.remove();
    });
});

//==========================================================================
const table = document.querySelector('.recentOrders table');

        table.querySelectorAll('.deleteBtn').forEach((deleteBtn) => {
            deleteBtn.addEventListener('click', () => {
                const row = deleteBtn.closest('tr');
                row.remove();
            });
        });

 //===========================================================
 