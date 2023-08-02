let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    //1.
    input.splice (
        1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"
    ) 
    console.log(input)
    
    //2.

    let array = input [3]
    let tanggal = array.split("/")
    let mei = tanggal[1]

    if(mei === "05"){
        console.log("Mei")
    }
    //3.
    let reverse = [tanggal[2],tanggal[1],tanggal[0]]
    console.log(reverse)

    //4.
    let strip = tanggal[0] + "-" + tanggal[1] + "-" + tanggal[2]
    console.log(strip)

    //5.
    let chara = input[1];
    let name = chara.slice(0,15)
    console.log(name)
    


}

dataHandling2(input);


/**
 * keluaran yang diharapkan (pada console)
 *
 *1. ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 *2. Mei
 *3. ["1989", "21", "05"]
 *4. 21-05-1989
 *5. Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */