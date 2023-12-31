'use client'

import * as React from 'react'

import { cn } from '../../lib/utils'
import { useAtBottom } from '../../lib/hooks/use-at-bottom'
import { Button, type ButtonProps } from '../ui/button'
import { BsArrowDown } from 'react-icons/bs'

export function ButtonScrollToBottom({ className, ...props }: ButtonProps) {
  const isAtBottom = useAtBottom()

  function scrollToBottom(){
    document.body.scrollTo({
      top: document.body.offsetHeight,
      behavior: 'smooth'
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        'absolute right-4 top-1 bg-background transition-opacity duration-300 sm:right-8 md:top-2',
        isAtBottom ? 'opacity-0' : 'opacity-100',
        className
      )}
      onClick={scrollToBottom}
      {...props}
    >
      <BsArrowDown />
      <span className="sr-only">Scroll to bottom</span>
    </Button>
  )
}