<script setup>

import ProfileItem from './ProfileItem.vue'
import BlogIcon from './icons/IconBlog.vue'
import LinkedInIcon from './icons/IconLinkedIn.vue'
import GithubIcon from './icons/IconGithub.vue'
import YoutubeIcon from './icons/IconYoutube.vue'
import AboutmeIcon from './icons/IconAboutme.vue'
const contentSlotName='content'

</script>

<template>
 
  <ProfileItem>
    <template #icon>
      <AboutmeIcon />
    </template>
    <template #heading>About Me</template>
    <template #content>
      My name is Navaneethakrishnan Sundarrajan aka navan. I finished my Bachelor of Engineering in 1996. 
      I'm a multi-area certified professional. I'm also 
      a <a href='https://mvp.sitecore.com/en/Directory/Profile?id=647544991a974739358908dbd59eaf10'>3 x Sitecore Technology MVP. </a>
      You can find more details about me here below:
    </template>    
  </ProfileItem>

  <ProfileItem>
    <template #icon>
      <BlogIcon alt="my blog icon alt"  />
    </template>
    <template #heading>My Blog spot</template>
    <template #[contentSlotName]>
      My 
      <a href="https://navansitecorenotes.blogspot.com/" target="_blank" rel="noopener">personal blogs</a> are
      based on my professional experience. Most of my blog posts are on <a href="https://www.sitecore.com" target="_blank" rel="noopener">
      Sitecore CMS</a> but they also cover other-related technical areas. 
      I also believe that blog posts are a good way to recount practical experience with graphical diagrams for future.
      Hopefully, the posts are useful to you too.
    </template>
  </ProfileItem>

  <ProfileItem>
    <template #icon>
      <LinkedInIcon />
    </template>
    <template #heading=headerProps>LinkedIn{{headerProps.suffix}}</template>
    <template #content>
      Although I'm not active in any of the social media platforms including Facebook and definitely far and away from Instagram, 
      I like to keep tab about the current technology trends. So, I'm active in LinkedIn and here is
      <a href="https://www.linkedin.com/in/navaneethakrishnansrnna/" target="_blank" rel="noopener">my LI address</a>. 
      I usually respond to messages in a jiffy, provided they are worthy from my viewpoint.
   </template>
  </ProfileItem>

  <ProfileItem>
    <template #icon>      
      <GithubIcon />
    </template>
    <template #heading=headerProps>Github{{headerProps.suffix}}</template>
    <template #content>      
      I believe in contributing to community projects since it not only helps improve my technical skills but also helps learn from others. 
      I commit my community project code in <a href='https://github.com/navancommits'>my Github</a>. 
      I also maintain code snippets in <a href='https://gist.github.com/navancommits'>
      Github gist</a>.
    </template>
  </ProfileItem>

  <ProfileItem>
    <template #icon>
      <YoutubeIcon />
    </template>
    <template #heading>Youtube</template>
    <template #content>  
      In recent times, i have found a new found interest in building technical videos in 
      <a href="https://www.youtube.com/@navan1725" target="_blank" rel="noopener">my personal Youtube channel</a>, i also have a 
      <a href="https://x.com/navin_Sr" target="_blank" rel="noopener">navan</a>
      twitter account that I'm trying to keep up-to-date without much success!
    </template>
  </ProfileItem>
 
</template>
