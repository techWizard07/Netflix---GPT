export const validateSignup=(name,phone,email,password)=>{
    const phoneValid=/^[0-9]{10}$/.test(phone)
    const emailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const passwordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    
    if(name==="") return "Enter your name"
    if (!phoneValid) return "please check your phone number"
    if(!emailValid) return "Email is not valid"
    if(!passwordValid) return "Password must contains minimum 8 characters consist of At least one uppercase letter, At least one lowercase letter, At least one digit, At least one special character.  "
    return null;
}
export const validateSignin=(email,password)=>{

    const emailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const passwordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)

    if(!emailValid) return "Email is not valid"
    if(!passwordValid) return "Password is not valid"

    return null;
}