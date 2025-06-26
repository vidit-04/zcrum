"use client";
import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGantt } from 'lucide-react'
import React from 'react'

const UserMenu = () => {
  return (
    <UserButton appearance={{
      elements: {
        avatarBox: "w-10 h-10",
      }
    }}>
      <UserButton.MenuItems>
        <UserButton.Link
          href="/onboarding"
          label="My Organizations"
          labelIcon={<ChartNoAxesGantt size={15} />}
        />
        
      <UserButton.Action label="manageAccount"/>
      </UserButton.MenuItems>
    </UserButton>
  );
}

export default UserMenu