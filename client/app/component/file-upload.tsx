'use client'
import * as React from "react";
import { HardDriveUpload } from 'lucide-react';

export default function FileUploadComponent() {
    const handleFileUploadClick = () => {
        const element = document.createElement('input');
        element.setAttribute('type', 'file');
        element.setAttribute('accept', 'application/pdf');
        element.addEventListener("change", (event) => {
        if (element.files && element.files.length > 0) {
            const file=element.files[0];
            
        }
    });
    element.click();
}

return (
    <div className="bg-slate-900 text-white shadow-2xl flex justify-center items-center p-4 rounded-lg border-white border-3">
        <div onClick={handleFileUploadClick} className="flex justify-center items-center flex-col">
            <h3>Upload PDF file</h3>
            <HardDriveUpload />
        </div>
    </div>

);
}
