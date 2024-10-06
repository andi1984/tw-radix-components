"use client"

import React from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";


export const Avatar = () => (
	<div style={{ display: "flex", gap: 20 }}>
		<RadixAvatar.Root className="AvatarRoot">
			<RadixAvatar.Image
				className="AvatarImage"
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="Colm Tuite"
			/>
			<RadixAvatar.Fallback className="AvatarFallback" delayMs={600}>
				CT
			</RadixAvatar.Fallback>
		</RadixAvatar.Root>
		<RadixAvatar.Root className="AvatarRoot">
			<RadixAvatar.Image
				className="AvatarImage"
				src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
				alt="Pedro Duarte"
			/>
			<RadixAvatar.Fallback className="AvatarFallback" delayMs={600}>
				JD
			</RadixAvatar.Fallback>
		</RadixAvatar.Root>
		<RadixAvatar.Root className="AvatarRoot">
			<RadixAvatar.Fallback className="AvatarFallback">PD</RadixAvatar.Fallback>
		</RadixAvatar.Root>
	</div>
);
export default Avatar;
