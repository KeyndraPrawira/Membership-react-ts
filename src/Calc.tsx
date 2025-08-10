
import React from "react";

export function AvgAge(users: any[]): number {
    if (!users.length)
        return 0;
    return Math.round(
        users.reduce((total, user) => total + user.dob.age, 0) / users.length
    );
}

export function AvgMembership(users: any[]): number {
    if (!users.length)
        return 0;

   const now = new Date();

   const ages = users.map(user => {
    const regDate = new Date(user.registered.date);
   

   //hitung perbedaan tahun, getFullYear = dapatkan data lamatahun
   const years = now.getFullYear()  - regDate.getFullYear();

   //jika bulan dan tanggal kurang dari hari ini , kurangi satu tahun
   if (now.getMonth() < regDate.getMonth() || (now.getMonth() === regDate.getMonth() && now.getDate() < regDate.getDate())) {
    return years -1;
   }

   return years
   });

//rata2
    return Math.round(
        ages.reduce((mean, age) => mean + age, 0) / ages.length
    );
}