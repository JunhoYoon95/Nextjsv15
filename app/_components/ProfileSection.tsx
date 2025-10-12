import { Card, CardContent } from "@/components/ui/card";
import {
    Youtube,
    Github,
    BookOpen,
    Instagram,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const socialLinks = [
    {
        icon: Youtube,
        href: "https://www.youtube.com/gymcoding",
    },
    {
        icon: Github,
        href: "https://github.com/JunhoYoon95",
    },
    {
        icon: BookOpen,
        href: "https://www.inflearn.com/users/432199/@gymcoding",
    },
    {
        icon: Instagram,
        href: "https://www.instagram.com/gymcoding",
    },
];

export default function ProfileSection() {
    return (
        <div>
            <Card>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex justify-center">
                            <div className="bg-muted rounded-full p-2">
                                <div className="h-36 w-36 overflow-hidden rounded-full">
                                    <Image
                                        src="/images/profile-light.png"
                                        alt="Kyurasi"
                                        width={144}
                                        height={144}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-lg font-bold">
                                Kyurasi (Junmannn)
                            </h3>
                            <p className="text-primary text-sm">
                                Full Stack Developer
                            </p>
                        </div>

                        <div className="flex justify-center gap-2">
                            {socialLinks.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="ghost"
                                    className="bg-primary/10"
                                    size="icon"
                                    asChild
                                >
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <item.icon className="h-4 w-4" />
                                    </a>
                                </Button>
                            ))}
                        </div>

                        <p className="bg-primary/10 rounded p-2 text-center text-sm">
                            여행을 좋아하는 개발자
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}