import type { Meta, StoryObj } from '@storybook/vue3'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './index'
import Button from '../button/Button.vue'
import Input from '../input/Input.vue'

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => ({
        components: {
            Card,
            CardHeader,
            CardTitle,
            CardDescription,
            CardAction,
            CardContent,
            CardFooter,
            Button,
            Input,
        },
        template: `
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div class="flex flex-col gap-6">
              <div class="grid gap-2">
                <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div class="grid gap-2">
                <div class="flex items-center">
                  <label for="password" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
                  <a
                    href="#"
                    class="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter class="flex-col gap-2">
          <Button type="submit" class="w-full">
            Login
          </Button>
          <Button variant="outline" class="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    `,
    }),
}

export const Simple: Story = {
    render: () => ({
        components: {
            Card,
            CardHeader,
            CardTitle,
            CardDescription,
            CardContent,
            CardFooter,
            Button,
        },
        template: `
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
    `,
    }),
}
