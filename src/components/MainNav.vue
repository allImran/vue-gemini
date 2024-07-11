<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

const routes: {
  name: string
  path: string
  
}[] = [
  { name: 'Text Output', path: '/' },
  { name: 'Streamed Output', path: '/streamed-output' },
  { name: 'File Upload', path: '/file-upload' },
  { name: 'Image Compare', path: '/image-compare' },
]
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>

      <NavigationMenuItem v-for="route in routes" :key="route.path">
        <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            <RouterLink :to="`${route.path}`">{{ route.name }} </RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
      
    </NavigationMenuList>
  </NavigationMenu>
</template>
