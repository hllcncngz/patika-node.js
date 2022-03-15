import fs from "fs"

fs.writeFile('employees.json', '{"name":"Employee 1 Name","salary":2000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("Dosya Başarılı Bir Şekilde Oluşturuldu");
});
fs.readFile("Employees.json", 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("Dosya Başarılı Bir Şekilde Okundu");
})
fs.appendFile('employees.json', '\n{"name":"employee 2 Name","salary":3000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("Yeni veri Eklendi");
    console.log("Liste Güncellendi");
});

setTimeout(()=>{
    fs.rm('employees.json', { recursive: true },(err) => {
        if (err) console.log(err);
        console.log("Dosya Başarılı Bir Şekilde Silindi");
    });
},2000)