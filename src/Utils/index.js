const roleCheck = (str) => {

    let role
    switch (str) {
        case "GK": role = "Portero"
            break
        case "LW": role = "Extremo izquerdo"
            break
        case "RW": role = "Extremo derecho"
            break
        case "LB": role = "Lateral izquierdo"
            break
        case "RB": role = "Lateral derecho"
            break
        case "CB": role = "Central"
            break
        case "PV": role = "Pivote"
            break

    }

    return role
}

export default roleCheck