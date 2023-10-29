import { useState } from "react";
import defaultAvatar from "@src/assets/user-svgrepo-com.svg";
import { Patient } from "@src/models/patient";

type FormData = {
  name: string;
  description: string;
  website: string;
  avatar: File | null | string;
};

interface PatientFormProps {
  onSubmit: (formData: Patient) => void;
  defaultFields?: Patient | null;
}

export const PatientForm = ({ onSubmit, defaultFields }: PatientFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: defaultFields?.name || "",
    description: defaultFields?.description || "",
    website: defaultFields?.website || "",
    avatar: defaultFields?.avatar || null,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          avatar: event.target.files ? event.target.files[0] : null,
        }));
      };
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let avatar = formData.avatar;
    if (formData.avatar instanceof File) {
      avatar = URL.createObjectURL(formData.avatar);
    }
    onSubmit({
      ...formData,
      avatar: (avatar || defaultAvatar) as string,
      createdAt: defaultFields?.createdAt ?? new Date().toDateString(),
      id: defaultFields?.id ?? `${crypto.randomUUID()}`,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="website" className="block text-gray-700 font-bold mb-2">
          Website
        </label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Image
        </label>
        {formData.avatar && formData.avatar instanceof File && (
          <img
            src={URL.createObjectURL(formData.avatar)}
            alt="Patient"
            className="mb-4"
          />
        )}
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};
