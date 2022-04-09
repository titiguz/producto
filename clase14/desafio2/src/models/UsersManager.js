class UserManager {
    constructor(){
        this.users=[]
    }
    get = () =>{
        return this.users;
    }
    set = (user) =>{
        if(this.users.length===0){
            user.id=1;
            this.users.push(user);
        }else{
            user.id=this.users[this.users.length-1].id +1;
            this.users.push(user);
        }
    }
}
export default new UserManager()