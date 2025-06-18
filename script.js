// script.js
function showBankInfo(bank) {
    let bankName = "";
    let bankDetails = "";

    switch(bank) {
        case 'BCP':
            bankName = "Banco de Crédito del Perú (BCP)";
            bankDetails = "El BCP es uno de los bancos más grandes y antiguos del Perú. Ofrece una amplia gama de servicios financieros para individuos y empresas.";
            break;
        case 'BBVA':
            bankName = "BBVA Perú";
            bankDetails = "BBVA es un banco global que tiene presencia en Perú. Se enfoca en servicios digitales y atención al cliente.";
            break;
        case 'BA':
            bankName = "Banco de la Nación";
            bankDetails = "El Banco de la Nación es una entidad del Estado peruano, orientada principalmente a la gestión de los pagos públicos y el servicio a entidades del gobierno.";
            break;
        case 'Interbank':
            bankName = "Interbank";
            bankDetails = "Interbank es uno de los bancos más populares en el Perú, conocido por su innovación tecnológica y su enfoque en la atención al cliente.";
            break;
        case 'BANBIF':
            bankName = "BANBIF";
            bankDetails = "BANBIF es un banco peruano, con una fuerte presencia en el sector de préstamos personales y financieros.";
            break;
        default:
            bankName = "Banco No Disponible";
            bankDetails = "No se encontró información disponible sobre este banco.";
            break;
    }

    document.getElementById("bank-name").innerText = bankName;
    document.getElementById("bank-details").innerText = bankDetails;
    document.getElementById("bank-info").style.display = "block";
}