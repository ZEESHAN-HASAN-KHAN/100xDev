//Pick allows you to create a new type from an existing type by selecting the properties you want to keep.
interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};
type UserPreview = Pick<User, 'id' | 'name'>; 

function updateUser(UserPreview: UserPreview) {
    console.log(UserPreview);
    
}