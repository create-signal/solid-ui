import { For } from "solid-js"

import { IconBell, IconCheck } from "~/components/icons"
import { Button } from "~/registry/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/registry/ui/card"
import { Switch } from "~/registry/ui/switch"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago"
  },
  {
    title: "You have a new message!",
    description: "1 hour ago"
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago"
  }
]

export default function CardDemo() {
  return (
    <Card class="w-[380px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class=" flex items-center space-x-4 rounded-md border p-4">
          <IconBell class="size-6" />
          <div class="flex-1 space-y-1">
            <p class="text-sm font-medium leading-none">Push Notifications</p>
            <p class="text-sm text-muted-foreground">Send notifications to device.</p>
          </div>
          <Switch />
        </div>
        <div>
          <For each={notifications}>
            {(notification) => (
              <div class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span class="flex size-2 translate-y-1 rounded-full bg-sky-500" />
                <div class="space-y-1">
                  <p class="text-sm font-medium leading-none">{notification.title}</p>
                  <p class="text-sm text-muted-foreground">{notification.description}</p>
                </div>
              </div>
            )}
          </For>
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full">
          <IconCheck class="mr-2 size-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}
