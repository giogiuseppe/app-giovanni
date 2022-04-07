function enviarLoginValidation() {

    var valido = true;

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (!validarUsuario(usuario, false)) {
        document.getElementById('usuario_invalido').hidden = false
        valido = false;
    }

    if (!validarSenha(senha, false)) {
        document.getElementById('senha_invalida').hidden = false
        valido = false;
    }

    return valido;
}

function validarUsuario(usuario, showAlert = true) {
    try {
        let value = usuario ?? document.getElementById("usuario").value;
        let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
        if (!re.test(value)) {
            if (showAlert) {
                alert('Usuário incorreto');
            }
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function validarSenha(senha, showAlert = true) {
    try {
        let value = senha ?? document.getElementById("senha").value;
        let re = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;
        if (!re.test(value)) {
            if (showAlert) {
                alert('Senha incorreta');
            }
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}