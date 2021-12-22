import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>){
  }
  public getAllUsers(): Promise<User[]>{
    return this.userRepository.find();
  }
  public insertNewUser(obj: {name: string}): Promise<User>{
    
    const user =  this.userRepository.create(obj);
    return this.userRepository.save(user);

    // const createdUser = this.userRepository.insert(user);
    // return createdUser;
  }

  public async  updateUser(obj: {id: number, name?: string}): Promise<User>{
    try{
      console.log(obj.id);
      const foundUser = await this.userRepository.findOneOrFail({where: {
        id: obj.id
      }});
      foundUser.name = obj.name || foundUser.name;
      await this.userRepository.save(foundUser);
      return foundUser;
    }catch(err){
      throw  new NotFoundException();
    }
  }
  public async softDeleteUser(id: number){
    const deletedUser = await  this.userRepository.softDelete(id);
    return deletedUser;
  }
  public async deleteUser(id: number){
    const deletedUser = await this.userRepository.delete(id);
    return deletedUser;
  }
  public async deleteAndReturn(id: number) : Promise<User>{
    try{
      const user = await this.userRepository.findOneOrFail(id);
      return await this.userRepository.remove(user);
    }catch(err){
      throw new NotFoundException();
    }
  }
}
