//услович оператора if/else   swish/
// let email = prompt('ВВедите ваш email')
// let password = prompt('Введите ваш пароль')
// let useremail = 'admin'
// let userpassword = 'admin123'

// if(email === useremail && password ===  userpassword) {
//     alert("вы успешно вошли систему")
// }else {
//     alert("неверный пароль или логин")
// }

// let num = prompt("задай число")

// if(num < 0){
//     alert('число отрицатильное')
// }else{
//     alert('число не отрицательное')
// }

// let month = prompt("Введите любой месяц");

// switch (month) {
//   case "январь":
//   case "февраль":
//   case "декабрь":
//     alert("зима");
//     break;

//   case "март":
//   case "апрель":
//   case "май":
//     alert("весна");
//     break;
//   case "июнь":
//   case "июль":
//   case "августь":
//     alert(лето)
//     break;
//   case "сентябрь":
//   case "сентябрь":
//   case "сентябрь":
//     alert("осень");
//       break;
//  default:
//     alert("такого месяца не существует")

// }
let district = prompt ('ведите любой район');
   switch(district){
    case 'баткен':
    case 'кадамжай':
    case 'лейлек':
        alert('баткен')

        break;
        case 'аксы':
        case 'ала-бука':
        case 'базар-коргон':
        case 'ноокен':
        case 'сузак':
        case 'тогуз-тороо':
        case 'токтогул':
        case 'чаткал':
            alert('Жалал-Абад')
            break;
        case'ак-суу':
        case'жети-огуз':
        case'тон':
        case'туп':
        case'ысык-кол':
            alert('ысык-кол')
            break;
        case'ак-талаа':
        case'ат-башы':
        case'жумгал':
        case'кочкор':
        case'нарын':
            alert('Нарын')
            break;
        case'алай':
        case'араван':
        case'кара-кулжа':
         case'чон-алай':
          case'кара-суу':
           case'ноокат':
            case'озгон':
            alert('Ош')
            break;
        case'бакай-ата':
        case'ккара-буура':
        case'манас':
        case'талас':
            alert('Талас')
            break;
        case'аламудун':
        case'жайыл':
        case'кемин':
         case'москва':
          case'панфилов':
           case'сокулук':
            case'ысык-ата':
             case'чуй':
             alert('Чуй')
        

         default:
            alert('такого район не существует')

        
        
   }
