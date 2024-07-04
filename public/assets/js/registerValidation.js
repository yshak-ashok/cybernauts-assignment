function registerValidation() {
    const category = document.getElementById('category');
    const model = document.getElementById('model');
    const serialNumber = document.getElementById('serial-number');
    const invoiceDate = document.getElementById('date-of-invoice');
    const file = document.getElementById('upload-file');

    const categoryError = document.getElementById('categoryError');
    const modelError = document.getElementById('modelError');
    const serailNumberError = document.getElementById('serailNumberError');
    const invoiceDateError = document.getElementById('invoiceDateError');
    const fileError = document.getElementById('fileError');

    let isValid = true;

    if (serialNumber.value.trim() == '') {
        serailNumberError.innerHTML = 'Serial Number Required';
        serialNumber.style.borderColor = 'red';
        isValid = false;
    } else {
        serailNumberError.innerHTML = '';
        serialNumber.style.borderColor = '';
    }

    if (category.value == '') {
        categoryError.innerHTML = 'Category Required';
        category.style.borderColor = 'red';
        isValid = false;
    } else {
        categoryError.innerHTML = '';
        category.style.borderColor = '';
    }

    if (model.value == '') {
        modelError.innerHTML = 'Model Required';
        model.style.borderColor = 'red';
        isValid = false;
    } else {
        modelError.innerHTML = '';
        model.style.borderColor = '';
    }

    if (invoiceDate.value == '') {
        invoiceDateError.innerHTML = 'Date of Invoice Required';
        invoiceDate.style.borderColor = 'red';
        isValid = false;
    } else {
        invoiceDateError.innerHTML = '';
        invoiceDate.style.borderColor = '';
    }

    if (file.files.length === 0) {
        fileError.innerHTML = 'File Required';
        file.style.borderColor = 'red';
        isValid = false;
    } else {
        fileError.innerHTML = '';
        file.style.borderColor = '';
    }

    if (!isValid) {
        setTimeout(() => {
            serailNumberError.innerHTML = '';
            categoryError.innerHTML = '';
            modelError.innerHTML = '';
            invoiceDateError.innerHTML = '';
            fileError.innerHTML = '';
            file.style.borderColor = '';
            serialNumber.style.borderColor = '';
            category.style.borderColor = '';
            model.style.borderColor = '';
            invoiceDate.style.borderColor = '';
            file.style.borderColor = '';
        }, 3000);
    }

    return isValid;
}
