export class resumeModel
{
  basics: basicsModel;
  work : workModel;
  volunteer: volunteerModel;
  education: educationModel;
  awards: awardsModel;
  skills: skillModel;
  projects: projectModel;
  language: languageModel;
  interest: interestModel;

}

export class basicsModel
{
name: string;
label: string;
picture: string;
email: string;
phone: string;
website: string;
summary: string;
location: locationModel;
profiles: profileModel;
education: educationModel;
awards: awardsModel;
publication:  publicationModel;
skills: skillModel;
projects: projectModel;
language: languageModel;
interests: interestModel;
reference: referenceModel;
work : workModel[];
}

export class locationModel
{
address: string;
postalCode: string;
city: string;
countryCode: string;
region: string;

}

export class profileModel
{
network: string;
username: string;
url : string;
}


export class workModel
{
company: string;
position: string;
website: string;
startDate: string;
endDate: string;
summary: string;
highlights: [];
isCurrentRole: boolean;
start: [];
end:[];

}

export class volunteerModel
{
organization: string;
position: string;
website:string;
startDate: string;
endDate: string;
summary: string;
highlights: [];
}

export class educationModel
{
institution: string;
area: string;
studyType: string;
startDate: string;
endDate: string;
gpa: string;
courses: [];
}

export class awardsModel
{
title: string;
date: string;
awarder: string;
summary: string;
}

export class publicationModel
{
name: string;
publisher: string;
releaseDate: string;
website: string;
summary: string;
}
export class skillModel
{
name: string;
level: string;
keywords: [];
}

export class projectModel
{
name: string;
description: string;
url: string;
highlights:[];
keywords:[];
roles:[];
startDate:string;
endDate: string;
entity:string;
type: string;
displayName: string;
website: string;
summary:string;
primaryLanguage: string;
languages: [];
libraries: [];
      githubUrl: string;
      repositoryUrl: string;
      start: [];
      end: [];
      images: [];
      videos: [];
    
}

export class languageModel
{
language: string;
fluency: string;
}

export class interestModel
{
name: string;
keywords: [];
}

export class referenceModel
{
name: string;
reference: string;
}
