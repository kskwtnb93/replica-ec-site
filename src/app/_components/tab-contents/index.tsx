'use client'
import React, { useState } from 'react'

import { css } from '@kuma-ui/core'
import Tab from '@/app/_components/tab'

interface Data {
  id: number
  label: string
  content: React.ReactNode
}

interface Props {
  datas: Data[]
}

export default function TabsContents({ datas }: Props) {
  const [activeTab, setActiveTab] = useState<number>(datas[0].id)

  const handleTabClick = (id: number) => {
    setActiveTab(id)
  }

  return (
    <div
      className={css`
        background-color: #fff;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;
          border-bottom: 0.1rem solid rgba(45, 45, 45, 0.07);

          @media screen and (max-width: 979px) {
            gap: 0;
            border-top: 0.1rem solid rgba(45, 45, 45, 0.07);
          }
        `}
      >
        {datas.map((data) => (
          <Tab
            key={data.id}
            kind="button"
            active={data.id === activeTab}
            label={data.label}
            onClick={() => handleTabClick(data.id)}
          />
        ))}
      </div>
      <div>
        {datas.map((data) => (
          <div
            key={data.id}
            style={{ display: data.id === activeTab ? 'block' : 'none' }}
          >
            {data.content}
          </div>
        ))}
      </div>
    </div>
  )
}
