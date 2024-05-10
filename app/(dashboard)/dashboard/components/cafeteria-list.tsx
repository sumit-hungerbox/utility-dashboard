import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentCafeteriaList() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Adani</p>
          <p className="text-sm text-muted-foreground">
            Hyderabad, Ahmedabad, Mumbai, Chennai
          </p>
        </div>
        <div className="ml-auto font-medium">+20k orders</div>
      </div>
      {/* // do same for other cafeterias // coco cola, apple inc, google inc,
      microsoft inc */}
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Coco Cola</p>
          <p className="text-sm text-muted-foreground">
            Hyderabad, Ahmedabad, Mumbai, Chennai
          </p>
        </div>
        <div className="ml-auto font-medium">+15k orders</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Apple Inc</p>
          <p className="text-sm text-muted-foreground">Hyderabad</p>
        </div>
        <div className="ml-auto font-medium">+14k orders</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>MC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Microsoft Inc</p>
          <p className="text-sm text-muted-foreground">Bengaluru, Pune</p>
        </div>
        <div className="ml-auto font-medium">+7k orders</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>TI</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none"> Tesla Inc</p>
          <p className="text-sm text-muted-foreground">Pune, Noida, Gurgaon</p>
        </div>
        <div className="ml-auto font-medium">+18k orders</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>JI</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jio Inc</p>
          <p className="text-sm text-muted-foreground">
            Mumbai, Noiada, Gurgaon
          </p>
        </div>
        <div className="ml-auto font-medium">+27k orders</div>
      </div>
    </div>
  );
}
