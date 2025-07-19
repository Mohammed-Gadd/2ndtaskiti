import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  Users = [
    {
      id: 1,
      firstName: 'Mohamed',
      lastName: 'Mahmoud',
      maidenName: 'Gad',
      age: 21,
      gender: 'male',
      email: 'mohgad604@gmail.com',
      phone: '+20 100-390-2476',
      username: 'Mo_90',
      password: 'userpass1',
      birthDate: '2004-09-26',
      image: 'https://dummyjson.com/icon/user1/128',
      bloodGroup: 'A+',
      height: 175.5,
      weight: 70.2,
      eyeColor: 'Brown',
      hair: { color: 'Black', type: 'Straight' },
      ip: '192.168.1.1',
      address: {
        address: '12 Tahrir Street',
        city: 'Cairo',
        state: 'Cairo Governorate',
        stateCode: 'C',
        postalCode: '11511',
        coordinates: { lat: 30.0444, lng: 31.2357 },
        country: 'Egypt'
      },
      macAddress: '00:1A:2B:3C:4D:5E',
      university: 'Cairo University',
      bank: {
        cardExpire: '12/27',
        cardNumber: '1234567812345678',
        cardType: 'Visa',
        currency: 'EGP',
        iban: 'EG12345678901234567890123456'
      },
      company: {
        department: 'Engineering',
        name: 'MisrTech',
        title: 'Software Engineer',
        address: {
          address: 'Office 1, 6 October',
          city: 'Giza',
          state: 'Giza Governorate',
          stateCode: 'G',
          postalCode: '12566',
          coordinates: { lat: 29.987, lng: 31.149 },
          country: 'Egypt'
        }
      },
      ein: 'EG-200000000',
      ssn: 'EG-100000000',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      crypto: {
        coin: 'Bitcoin',
        wallet: '0xwalletuser1',
        network: 'Ethereum (ERC20)'
      },
      role: 'admin'
    },
    {
      id: 2,
      firstName: 'Yousef',
      lastName: 'Mohamed',
      maidenName: 'Bahaa',
      age: 21,
      gender: 'male',
      email: 'yousef.mohamed@example.com',
      phone: '+20 1011-123-4511',
      username: 'Yo_45',
      password: 'userpass2',
      birthDate: '1994-01-15',
      image: 'https://dummyjson.com/icon/user2/128',
      bloodGroup: 'A+',
      height: 175.5,
      weight: 70.2,
      eyeColor: 'Brown',
      hair: { color: 'Black', type: 'Straight' },
      ip: '192.168.1.1',
      address: {
        address: '12 Tahrir Street',
        city: 'Cairo',
        state: 'Cairo Governorate',
        stateCode: 'C',
        postalCode: '11511',
        coordinates: { lat: 30.0444, lng: 31.2357 },
        country: 'Egypt'
      },
      macAddress: '00:1A:2B:3C:4D:5E',
      university: 'Cairo University',
      bank: {
        cardExpire: '12/27',
        cardNumber: '1234567812345678',
        cardType: 'Visa',
        currency: 'EGP',
        iban: 'EG12345678901234567890123456'
      },
      company: {
        department: 'Engineering',
        name: 'MisrTech',
        title: 'Software Engineer',
        address: {
          address: 'Office 2, 6 October',
          city: 'Giza',
          state: 'Giza Governorate',
          stateCode: 'G',
          postalCode: '12566',
          coordinates: { lat: 29.987, lng: 31.149 },
          country: 'Egypt'
        }
      },
      ein: 'EG-200000001',
      ssn: 'EG-100000001',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      crypto: {
        coin: 'Bitcoin',
        wallet: '0xwalletuser2',
        network: 'Ethereum (ERC20)'
      },
      role: 'user'
    },
    {
      id: 3,
      firstName: 'Omar',
      lastName: 'Mohamed',
      maidenName: 'mahmoud',
      age: 30,
      gender: 'male',
      email: 'Omar602@gmail.com',
      phone: '+20 100-390-2476',
      username: 'Omar_74',
      password: 'userpass3',
      birthDate: '1994-01-15',
      image: 'https://dummyjson.com/icon/user3/128',
      bloodGroup: 'A+',
      height: 175.5,
      weight: 70.2,
      eyeColor: 'Brown',
      hair: { color: 'Black', type: 'Straight' },
      ip: '192.168.1.1',
      address: {
        address: '12 Tahrir Street',
        city: 'Cairo',
        state: 'Cairo Governorate',
        stateCode: 'C',
        postalCode: '11511',
        coordinates: { lat: 30.0444, lng: 31.2357 },
        country: 'Egypt'
      },
      macAddress: '00:1A:2B:3C:4D:5E',
      university: 'Cairo University',
      bank: {
        cardExpire: '12/27',
        cardNumber: '1234567812345678',
        cardType: 'Visa',
        currency: 'EGP',
        iban: 'EG12345678901234567890123456'
      },
      company: {
        department: 'Engineering',
        name: 'MisrTech',
        title: 'Software Engineer',
        address: {
          address: 'Office 3, 6 October',
          city: 'Giza',
          state: 'Giza Governorate',
          stateCode: 'G',
          postalCode: '12566',
          coordinates: { lat: 29.987, lng: 31.149 },
          country: 'Egypt'
        }
      },
      ein: 'EG-200000002',
      ssn: 'EG-100000002',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      crypto: {
        coin: 'Bitcoin',
        wallet: '0xwalletuser3',
        network: 'Ethereum (ERC20)'
      },
      role: 'moderator'
    },

  ];

  filteredUsers = [...this.Users];
  searchVal = '';
  showReset = false;

  searchUsers(): void {
    if (this.searchVal.trim()) {
      this.filteredUsers = this.Users.filter(user =>
        user.email.toLowerCase().includes(this.searchVal.toLowerCase())
      );
      this.showReset = true;
    } else {
      this.filteredUsers = [...this.Users];
      this.showReset = false;
    }
  }

  resetSearch(): void {
    this.searchVal = '';
    this.filteredUsers = [...this.Users];
    this.showReset = false;
  }
}
