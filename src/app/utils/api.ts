import { CloudinaryImage, User } from "../../types";

export async function postUser(user: User): Promise<User> {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }

  const result: User = await response.json();
  return result;
}

export async function postLoginUser(user: Partial<User>): Promise<User> {
  const response = await fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: User = await response.json();
  return result;
}

export async function getLoggedInUser(): Promise<User> {
  const response = await fetch("/api/users/loggeduser", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: User = await response.json();
  return result;
}

export async function getUser(firstname: string): Promise<User> {
  const response = await fetch(`/api/users/${firstname}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: User = await response.json();
  return result;
}

export async function updateUser(user: User): Promise<User> {
  const response = await fetch(`/api/users/${user.email}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }

  const result: User = await response.json();
  return result;
}

export async function uploadProfilePicture(
  pictureFile: File
): Promise<CloudinaryImage> {
  const formData = new FormData();
  formData.append("file", pictureFile);
  formData.append(
    "upload_preset",
    `${import.meta.env.VITE_CLOUDINARY_PRESET_NAME}`
  );

  const cloudinaryResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const cloudinaryResult = await cloudinaryResponse.json();
  return cloudinaryResult;
}
