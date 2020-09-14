// Bài 1 Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả

// let a = 'progress'
// let b = ''
// for(let i = a.length - 1; i >=0;i-- ){
//     b += a[i]
//     console.log(a)
// }
// console.log(b)

// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với ký tự đầu được viết hoa.

// let a = 'my Name phuc hoc do'
// let b = a.split(" ");
// console.log(b)
// let newa = [];
// for(var i = 0; i<b.length; i++ ){
//     let firstletter = b[i].charAt(0).toUpperCase();
//     var rest = b[i].slice(1);
//     newa[i] = firstletter + rest
//     console.log(i)
// }
// console.log(newa.join(' '))

//bài 3.Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả

let  trung = ['banh', 'keo', 'banh']
let kqua = []
let n = 0
let ktra = false
for(i=0; i<trung.length; i++){
for (j = 0; j<kqua.length; j++){
    if(trung[i] == kqua[j]){
        ktra == true
    }
     // console.log(kqua)
}
n++
if (n==1 && ktra==false){
    kqua.push(trung[i])
}
ktra == false
n = 0
}
console.log(kqua)
// Bài 4

// let user = [
//     {
//         Name:'Hiếu',
//         age:20,
//         range:10000000,
//         cvu:'Quản lý'
//     },
//     {
//         Name:'Phi',
//         age:19,
//         range:8000000,
//         cvu:'Nhân Viên'
//     },
//     {
//         Name:'Quang',
//         age:19,
//         range:7000000,
//         cvu:'trợ giảng'
//     }
// ]
// const n = user.length
// for(i = 0; i<n; i++){
//     // console.log(user[i].Name)
//     console.log(`${i +1 } Name:${user[i].Name}\n Age: ${user[i].age}\n Range:${user[i].range}\n Chức Vụ:${user[i].cvu}`)
// }
// let nhap = prompt('Nhập chức năng bạn cần sử dụng\n Creat\n Update\n Xóa')
// if(nhap == 'creat'){
//     let newuser = {}
//     let newname = prompt('Nhập tên mới')
//     let newage = Number(prompt('Nhập tuổi người mới'))
//     let newrange = Number(prompt('Nhập mức lương của người mới'))
//     let newcvu = prompt('Nhập chức vụ') 
//         newuser.newname = newname ,newuser.newage = newage, newuser.newrange = newrange,newuser.newcvu = newcvu
//     console.log(newuser)
//     user.push({newuser})

//     // console.log(user[i].Name)
//     for(i = 0; i< user.length; i++){
//         // console.log(user[i].Name)
//         console.log(`${i +1 } Name:${user[i].Name}\n Age: ${user[i].age}\n Range:${user[i].range}\n Chức Vụ:${user[i].cvu}`)
//     }
// }
// else if (nhap == 'update'){
//     let vitriuser = prompt('Nhập vị trí cần update')

//     // alert('Nếu ')

//     let updatename = prompt('Nhập tên cần thay đổi')
//     let updateage = prompt('nhập tuổi cần thay đổi')
//     let updaterange = prompt('Nhập mức lương cần thay đổi')
//     let updatecvu = prompt('Chức vụ cần thay đổi')
//     user[vitriuser -1].Name = updatename
//     user[vitriuser -1].age = updateage
//     user[vitriuser -1].range = updaterange
//     user[vitriuser - 1].cvu = updatecvu
// // console.log(user[i].Name)
//     for(i = 0; i< user.length; i++){
//         // console.log(user[i].Name)
//         console.log(`Name:${user[i].Name}\n Age: ${user[i].age}\n Range:${user[i].range}\n Chức Vụ:${user[i].cvu}`)
//     }
// }
// else if (nhap == 'delete'){

//     let vitrixoa = prompt('Nhập vị trí nhân viên bạn muốn xóa')
//     user.splice(vitrixoa - 1, 1)
//     for(i = 0; i< user.length; i++){
//         // console.log(user[i].Name)
//         console.log(`Name:${user[i].Name}\n Age: ${user[i].age}\n Range:${user[i].range}\n Chức Vụ:${user[i].cvu}`)
//     }
// }
