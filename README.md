# Description

Project Astral is a web application for projects task management, which use React JS on frontend and FastAPI on backend. 

# How can I start it?

You can start Project Astral locally. I don't use Windows (also as our team), so I don't know how to start it on Windows, but, if I'm not mistaking, you can start it using Git Bash. So, you have to do next:  
`mkdir project-astral-dir && cd project-astral-dir && git clone https://github.com/Ho1Ai/project-astral && cd project-astral && npm i`  
This line makes a local copy of frontend repository and downloads needed libraries  
Then make a copy of backend repository:  
`cd .. && git clone https://github.com/Ho1Ai/astral-server && cd astral-server`
This line makes a local copy of backend repository. It has no file "requirements.txt" (because I don't use it), so I wrote requirements here:  
- fastapi  
- uvicorn  
- asyncpg  
If you wanna download all these libraries, just write next (venv is required. Wrote a line with venv creation):  
`python3 -m venv venv && . venv/bin/activate && pip install fastapi uvicorn asyncpg`  
NOTE: it may also require pydantic, so if it doesn't work because there are nothing called pydantic, just install pydantic using pip install pydantic  
Then run backend: `uvicorn main:app --reload`

Then go to `project-astral-dir/project-astral/` and write `npm run dev`  
Then you can open this application using your browser. Go to https://localhost:5173


# React + Vite

For developers: 
    used libraries (exc. React):
        1. react-router-dom
        2. tailwindcss

# Still not ready! 
Uploaded, because I don't wanna use Google Drive to share my project between my PC and laptop

# Collapse Open-Source Team
Yeah, it is a project by Collapse Open-Source Team. It is better to keep it here. In the beggining we had only me and designer, so I didn't mention our team in the beggining.  Since 2025/03/15 development is active (before that this project was freezed). Still building this project just to make development easier

# For people, who looks at this project
there is some things I used in the beggining. You had better know about these things:  
    - .totmb is same to .md or .txt (just document with text, no more)  
    - Somewhere you can see comments like this: " /* ember styles */ ". Maybe it is strange to see "Ember"/"Amber"... who is "Ember"/"Amber"?.. Well, "Ember"/"Amber" is... let's call it "subapplication"... it is a subapplication for notes (subapplication cuz I was making this stuff as another application). It is easier for me to call it like that, but in the future I'm gonna remove this name and it will become just "notes"

# Updates (Patch Note)
Note: we are using our own version naming. In the future I'm gonna add it somewhere here.  
Since 2025/05/09 we are making update list:
    
- previously: added landing page, static content for profile, static content for projects list, static content for project page. Then moved static content to backend and marked as "static content"
    
- 00006p (2025/05/09) - added something to backend. This project is still the only project, which can be opened, because we are just testing these things. Added "Updates" title. Since 00006p you can update to do list entities, but the page still does not update to do list entities status until you update page. I have some ideas how to fix it, but didn't do it (sry, forgot about it). Backend still doesn't use databases, but it will be added very soon. Comments for project page have been removed, because they have no usable case at the moment, so we're gonna bring them back in 01010b or 1.0.0 (may be marked as 11000r.01)
    
- 00007p (2025/05/10, approximately 4.20 p.m.) - now you can append any things to to do list (TDL) in project. Also it updates to do list when you are sending any changes to server
    
- 00007p1s (2025/05/11, approximately 12.23 a.m.) - added some animations on project list page (marked as PLP in class lists) and finally changed text in button, which could create projects. Now gonna change some things connected with it (project creator and some things like this). Also gonna work on accounts

- 00007p1s1q (2025/05/11, approximately 12.39 a.m.) - some changes in README.md

- 00008p (2025/05/18, approximately 02.17 a.m.) - disabled post adder button on profile page just to make profiles usable. Started adding some things to backend. Added modal window for project creation and made some things for project creation. Now gonna add some things to backend for accounts and try to make this project way more usable. Next step is authorization.
