

var mobiles = {
    Samsung: {
        SamsungA10: {
            name: "Samsung A10",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "22,000 PKR"
        },
        SamsungA20: {
            name: "Samsung A20",
            ram: "4gb",
            rom: "64gb",
            camera: "18",
            price: "28,000"
        },
        SamsungA30: {
            name: "Samsung A30",
            ram: "4gb",
            rom: "64gb",
            camera: "25",
            price: "29,000"
        }
    },
    IPhone: {
        IPhone11: {
            name: "IPhone11",
            ram: "4gb",
            rom: "64gb",
            camera: "12",
            price: "100,000"
        },
        IPhone12: {
            name: "IPhone12",
            ram: "4gb",
            rom: "64gb",
            camera: "12",
            price: "150,000"
        },
        IPhone13: {
            name: "IPhone13",
            ram: "6gb",
            rom: "128gb",
            camera: "24",
            price: "200,000"
        }
    },
    Oppo: {
        OppoV20: {
            name: "OppoV20",
            ram: "8gb",
            rom: "128gb",
            camera: "64",
            price: "54,999"
        },
        OppoF19: {
            name: "OppoF19",
            ram: "6gb",
            rom: "128gb",
            camera: "48",
            price: "36,999"
        },
        OppoF11: {
            name: "OppoF11",
            ram: "4gb",
            rom: "64gb",
            camera: "48",
            price: "35,999"
        }
    },
    Vivo: {
        VivoY20: {
            name: "VivoY20",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "26,999"
        },
        VivoY21: {
            name: "VivoY21",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "43,999"
        },
        VivoY55: {
            name: "VivoY55",
            ram: "8gb",
            rom: "128gb",
            camera: "50",
            price: "64,999"
        }
    }
}

var NAME = "NAME"
var RAM = "RAM"
var ROM = "ROM"
var CAMERA = "CAMERA"
var PRICE = "PRICE"
var thead = document.getElementById("thead")
var tbody = document.getElementById("tbody")
var company = prompt("Enter the Company Name")
var model = prompt("Enter the Model Name")
console.log(company + model)
if (company <= mobiles.Samsung && model <= mobiles.Samsung.SamsungA10) {
    thead.innerHTML =
        `<tr>
                   <th>${NAME}</th>
                   <th>${RAM}</th>
                   <th>${ROM}</th>
                   <th>${CAMERA}</th>
                   <th>${PRICE}</th>
               </tr>`

    tbody.innerHTML =
        `<tr>
               <td>${mobiles[company][model].name}</td>
               <td>${mobiles[company][model].ram}</td>
               <td>${mobiles[company][model].rom}</td>
               <td>${mobiles[company][model].camera}</td>
               <td>${mobiles[company][model].price}</td>
               </tr>`

}

else if (company <= mobiles.Samsung && model <= mobiles.Samsung.SamsungA20) {
    thead.innerHTML =
        `<tr>
                   <th>${NAME}</th>
                   <th>${RAM}</th>
                   <th>${ROM}</th>
                   <th>${CAMERA}</th>
                   <th>${PRICE}</th>
               </tr>`

    tbody.innerHTML =
        `<tr>
               <td>${mobiles[company][model].name}</td>
               <td>${mobiles[company][model].ram}</td>
               <td>${mobiles[company][model].rom}</td>
               <td>${mobiles[company][model].camera}</td>
               <td>${mobiles[company][model].price}</td>
               </tr>`
}

else if (company <= mobiles.Samsung && model <= mobiles.Samsung.SamsungA30) {
    thead.innerHTML =
        `<tr>
                   <th>${NAME}</th>
                   <th>${RAM}</th>
                   <th>${ROM}</th>
                   <th>${CAMERA}</th>
                   <th>${PRICE}</th>
               </tr>`

    tbody.innerHTML =
        `<tr>
               <td>${mobiles[company][model].name}</td>
               <td>${mobiles[company][model].ram}</td>
               <td>${mobiles[company][model].rom}</td>
               <td>${mobiles[company][model].camera}</td>
               <td>${mobiles[company][model].price}</td>
               </tr>`
}

else if (company <= mobiles.IPhone && model <= mobiles.IPhone.IPhone11) {
    thead.innerHTML =
        `<tr>
                   <th>${NAME}</th>
                   <th>${RAM}</th>
                   <th>${ROM}</th>
                   <th>${CAMERA}</th>
                   <th>${PRICE}</th>
               </tr>`

    tbody.innerHTML =
        `<tr>
               <td>${mobiles[company][model].name}</td>
               <td>${mobiles[company][model].ram}</td>
               <td>${mobiles[company][model].rom}</td>
               <td>${mobiles[company][model].camera}</td>
               <td>${mobiles[company][model].price}</td>
               </tr>`
}

else if (company <= mobiles.IPhone && model <= mobiles.IPhone.IPhone12) {
    thead.innerHTML =
        `<tr>
                   <th>${NAME}</th>
                   <th>${RAM}</th>
                   <th>${ROM}</th>
                   <th>${CAMERA}</th>
                   <th>${PRICE}</th>
               </tr>`

    tbody.innerHTML =
        `<tr>
               <td>${mobiles[company][model].name}</td>
               <td>${mobiles[company][model].ram}</td>
               <td>${mobiles[company][model].rom}</td>
               <td>${mobiles[company][model].camera}</td>
               <td>${mobiles[company][model].price}</td>
               </tr>`
}

else if (company <= mobiles.IPhone && model <= mobiles.IPhone.IPhone13) {
    thead.innerHTML =
        `<tr>
                   <th>${NAME}</th>
                   <th>${RAM}</th>
                   <th>${ROM}</th>
                   <th>${CAMERA}</th>
                   <th>${PRICE}</th>
               </tr>`

    tbody.innerHTML =
        `<tr>
               <td>${mobiles[company][model].name}</td>
               <td>${mobiles[company][model].ram}</td>
               <td>${mobiles[company][model].rom}</td>
               <td>${mobiles[company][model].camera}</td>
               <td>${mobiles[company][model].price}</td>
               </tr>`
}

else if (company <= mobiles.Oppo && model <= mobiles.Oppo.OppoV20) {
    thead.innerHTML =
        `<tr>
                   <th>${NAME}</th>
                   <th>${RAM}</th>
                   <th>${ROM}</th>
                   <th>${CAMERA}</th>
                   <th>${PRICE}</th>
               </tr>`

    tbody.innerHTML =
        `<tr>
               <td>${mobiles[company][model].name}</td>
               <td>${mobiles[company][model].ram}</td>
               <td>${mobiles[company][model].rom}</td>
               <td>${mobiles[company][model].camera}</td>
               <td>${mobiles[company][model].price}</td>
               </tr>`
}

else if (company <= mobiles.Oppo && model <= mobiles.Oppo.OppoF19) {
    thead.innerHTML =
        `<tr>
                   <th>${NAME}</th>
                   <th>${RAM}</th>
                   <th>${ROM}</th>
                   <th>${CAMERA}</th>
                   <th>${PRICE}</th>
               </tr>`

    tbody.innerHTML =
        `<tr>
               <td>${mobiles[company][model].name}</td>
               <td>${mobiles[company][model].ram}</td>
               <td>${mobiles[company][model].rom}</td>
               <td>${mobiles[company][model].camera}</td>
               <td>${mobiles[company][model].price}</td>
               </tr>`
}

else if (company <= mobiles.Oppo && model <= mobiles.Oppo.OppoF11) {
    thead.innerHTML =
        `<tr>
                   <th>${NAME}</th>
                   <th>${RAM}</th>
                   <th>${ROM}</th>
                   <th>${CAMERA}</th>
                   <th>${PRICE}</th>
               </tr>`

    tbody.innerHTML =
        `<tr>
               <td>${mobiles[company][model].name}</td>
               <td>${mobiles[company][model].ram}</td>
               <td>${mobiles[company][model].rom}</td>
               <td>${mobiles[company][model].camera}</td>
               <td>${mobiles[company][model].price}</td>
               </tr>`
}

else if (company <= mobiles.Vivo && model <= mobiles.Vivo.VivoY20) {
    thead.innerHTML =
        `<tr>
                   <th>${NAME}</th>
                   <th>${RAM}</th>
                   <th>${ROM}</th>
                   <th>${CAMERA}</th>
                   <th>${PRICE}</th>
               </tr>`

    tbody.innerHTML =
        `<tr>
               <td>${mobiles[company][model].name}</td>
               <td>${mobiles[company][model].ram}</td>
               <td>${mobiles[company][model].rom}</td>
               <td>${mobiles[company][model].camera}</td>
               <td>${mobiles[company][model].price}</td>
               </tr>`
}

else if (company <= mobiles.Vivo && model <= mobiles.Vivo.VivoY21) {
    thead.innerHTML =
        `<tr>
                   <th>${NAME}</th>
                   <th>${RAM}</th>
                   <th>${ROM}</th>
                   <th>${CAMERA}</th>
                   <th>${PRICE}</th>
               </tr>`

    tbody.innerHTML =
        `<tr>
               <td>${mobiles[company][model].name}</td>
               <td>${mobiles[company][model].ram}</td>
               <td>${mobiles[company][model].rom}</td>
               <td>${mobiles[company][model].camera}</td>
               <td>${mobiles[company][model].price}</td>
               </tr>`
}

else if (company <= mobiles.Vivo && model <= mobiles.Vivo.VivoY55) {
    thead.innerHTML =
        `<tr>
                   <th>${NAME}</th>
                   <th>${RAM}</th>
                   <th>${ROM}</th>
                   <th>${CAMERA}</th>
                   <th>${PRICE}</th>
               </tr>`

    tbody.innerHTML =
        `<tr>
               <td>${mobiles[company][model].name}</td>
               <td>${mobiles[company][model].ram}</td>
               <td>${mobiles[company][model].rom}</td>
               <td>${mobiles[company][model].camera}</td>
               <td>${mobiles[company][model].price}</td>
               </tr>`
}
else{
    alert("Only Samsung, IPhone, Oppo and Vivo Mobiles  available here")
}















