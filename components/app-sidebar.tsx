import { 
    Home, 
    Users, 
    Bell, 
    Ticket, 
    ShoppingCart, 
    Settings, 
    Plus,
    Search,
    Lock
  } from "lucide-react"
  import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
    SidebarInput
  } from "@/components/ui/sidebar"
  
  const mainItems = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Friends",
      url: "#",
      icon: Users,
    },
    {
      title: "Marketplace",
      url: "#",
      icon: ShoppingCart,
    },
    {
      title: "Events",
      url: "#",
      icon: Ticket,
    },
    {
      title: "Notifications",
      url: "#",
      icon: Bell,
    },
  ]
  
  const settingsItems = [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]
  
  export function AppSidebar() {
    return (
      <Sidebar className="bg-gray-900 text-gray-300 border-r border-gray-700">
        <SidebarContent>
          {/* Search Input */}
       
  
          {/* Main Navigation */}
          <SidebarGroup className="mt-3">
            <SidebarGroupLabel className="text-gray-400 px-3 ">Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="hover:bg-gray-800 rounded-lg group">
                      <a href={item.url} className="gap-3 px-3 py-2.5 relative flex items-center">
                        <div className={`p-1 rounded-lg ${
                          item.title === 'Marketplace' ? 'bg-gradient-to-tr from-purple-500 to-blue-500' :
                          item.title === 'Events' ? 'bg-gradient-to-tr from-green-500 to-cyan-500' :
                          'bg-gradient-to-tr from-orange-500 to-pink-500'
                        }`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium flex-1">{item.title}</span>
                        {(item.title === 'Marketplace' || item.title === 'Events') && (
                          <Lock className="w-4 h-4 text-yellow-400 ml-2" />
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
  
          <SidebarSeparator className="bg-gray-700" />
  
          {/* Communities Section */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-400">
              <div className="flex items-center justify-between px-1">
                <span>Communities</span>
                
              </div>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="hover:bg-gray-800 rounded-lg">
                    <a href="#" className="gap-1 px-3 py-2.5 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div><br />
                      <div>
                        <span className="font-medium block">Computer Programming</span>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="mt-1">
                  <SidebarMenuButton asChild className="hover:bg-gray-800 rounded-lg">
                    <a href="#" className="gap-4 px-3 py-2.5 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-tr from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="font-medium block">Games Society</span>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
  
          <SidebarSeparator className="bg-gray-700" />
  
          {/* Settings Navigation */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-400 px-3">Account</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {settingsItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="hover:bg-gray-800 rounded-lg">
                      <a href={item.url} className="gap-3 px-3 py-2.5 flex items-center">
                        <div className="p-1.5 rounded-lg bg-gradient-to-tr from-gray-700 to-gray-600">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }