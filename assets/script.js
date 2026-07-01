
function toggleMenu(){document.getElementById('navLinks').classList.toggle('open')}
function openLightbox(src,alt){const box=document.getElementById('lightbox');box.querySelector('img').src=src;box.querySelector('img').alt=alt||'Expanded photo';box.classList.add('open')}
function lightboxClose(e){if(e.target.id==='lightbox'||e.target.tagName==='BUTTON'){document.getElementById('lightbox').classList.remove('open')}}
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('img').forEach(img=>{if(!img.closest('.brand')){img.addEventListener('click',()=>openLightbox(img.src,img.alt))}});const modal=document.getElementById('fanModal');if(modal&&!sessionStorage.getItem('gamersLinkFanSiteAcceptedThisSession')){modal.classList.add('open')}});
function acceptFanSite(){sessionStorage.setItem('gamersLinkFanSiteAcceptedThisSession','yes');const modal=document.getElementById('fanModal');if(modal)modal.classList.remove('open')}
function showFanNotice(){const modal=document.getElementById('fanModal');if(modal)modal.classList.add('open')}
const games=['Ticket to Ride','Cascadia','Azul','Codenames','Hues & Cues','Pandemic','King of Tokyo','Carcassonne','Everdell','Dune','Terraforming Mars','Mysterium','Lost Cities','Dragon Castle','Ready Set Bet','Taco Cat Goat Cheese Pizza','Ark Nova','Kingdomino','Tsuro','Puerto Rico','Acquire','Reef','Machi Koro 2'];
function randomGame(){document.getElementById('gameOutput').textContent='Fan pick to look for: '+games[Math.floor(Math.random()*games.length)]+' — call or visit to check current availability.'}
function rollDie(sides){const n=Math.floor(Math.random()*sides)+1;let msg='You rolled a D'+sides+': '+n;if(sides===20&&n===20)msg+=' — Natural 20!';if(sides===20&&n===1)msg+=' — Critical oops!';document.getElementById('diceOutput').textContent=msg}
function packPick(){const p=['Pokémon booster hunt','Japanese or Korean Pokémon pack search','Magic: The Gathering Commander browse','Magic booster box window shopping','Lorcana treasure hunt','Singles case adventure','Sleeves and deck box upgrade','Mystery collector browse'];document.getElementById('packOutput').textContent=p[Math.floor(Math.random()*p.length)]+' — check with the store for what is currently available.'}
function achievement(name){const out=document.getElementById('achievementOutput');out.textContent='🏆 Achievement Unlocked: '+name;}
