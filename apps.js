var alphabet=prompt("Enter Your Letter:");
switch(alphabet){
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
        document.write(alphabet + ' is vowel');
        break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
        document.write(alphabet + ' is Number');
        break;
        default:
            document.write(alphabet + ' is consonunt');
}