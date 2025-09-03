"use client";

import Image from 'next/image';
import { MenuIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Navbar5 = () => {
    const features: Array<{ href: string; title: string; description: string }> = [];

    return (
        <section className="sticky top-0 inset-x-0 z-50 bg-white py-4"> {/* sticky, no shadow */}
            <div className="w-full max-w-7xl mx-auto px-4"> {/* <= hard caps at 1280px */}
                <nav className="flex items-center justify-between">
                    <a href="" className="flex items-center gap-2">
                        <Image src="/qms/2 5.svg" className="h-8" alt="Navbar logo" width={65} height={2} />
                    </a>

                    <NavigationMenu className="hidden lg:block">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuContent>
                                    <div className="grid w-[600px] grid-cols-2 p-3">
                                        {features.map((feature, index) => (
                                            <NavigationMenuLink
                                                href={feature.href}
                                                key={index}
                                                className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                            >
                                                <div>
                                                    <p className="mb-1 font-semibold text-foreground">{feature.title}</p>
                                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                                </div>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="#whyUs" className={navigationMenuTriggerStyle()}>
                                    Why Us
                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#benefits" className={navigationMenuTriggerStyle()}>
                                    Benefits
                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#features" className={navigationMenuTriggerStyle()}>
                                    Features
                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="hidden items-center gap-4 lg:flex">
                        <Button>Contact Us</Button>
                    </div>

                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="max-h-screen overflow-auto">
                            <SheetHeader>
                                <SheetTitle>
                                    <a href="" className="flex items-center gap-2">
                                        <Image src="/qms/2.png" className="h-8" alt="Shadcn UI Navbar" width={32} height={32} />
                                    </a>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col p-4">
                                <Accordion type="single" collapsible className="mt-4 mb-2">
                                    <AccordionItem value="solutions" className="border-none">
                                        <AccordionContent>
                                            <div className="grid md:grid-cols-2">
                                                {features.map((feature, index) => (
                                                    <a
                                                        href={feature.href}
                                                        key={index}
                                                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                                    >
                                                        <div>
                                                            <p className="mb-1 font-semibold text-foreground">{feature.title}</p>
                                                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <div className="flex flex-col gap-6">
                                    <a href="#whyUs" className="font-medium">Why Us</a>
                                    <a href="#features" className="font-medium">Features</a>
                                    <a href="#benefits" className="font-medium">Benefits</a>
                                </div>
                                <div className="mt-6 flex flex-col gap-4">
                                    <Button asChild>
                                        <a href="#contact">Book A Demo</a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    );
};

export { Navbar5 };