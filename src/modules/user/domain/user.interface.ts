import type { User } from "./user.entity";

export interface CreateUserData {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'trainer' | 'staff'
}

export interface UpdateUserData {
  name?: string;
  email?: string;
  role?: 'admin' | 'trainer' | 'staff'
}

export interface userRepository{
  create(data: CreateUserData): Promise<User>;
  findByEmail(email: string): Promise<User | null>
  update(id: string, data: UpdateUserData): Promise<User>
  findById(id: string): Promise<User | null>
}